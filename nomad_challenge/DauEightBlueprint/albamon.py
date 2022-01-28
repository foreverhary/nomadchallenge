import requests
from bs4 import BeautifulSoup as bs

from DauEightBlueprint.save_csv import save_to_file

URL = "http://www.alba.co.kr/"


def extract_albamon_super_brand_pages():
    response = requests.get(URL)

    if response.status_code == 200:
        html = response.text
        soup = bs(html, 'html.parser')
        company_list = soup.select_one('#MainSuperBrand').select('li > a.goodsBox-info')
        # company_list = alba_soup.select('li > a.goodsBox-info')
        return company_list


def each_company_save_csv(company):
    company_link = company['href']
    company_name = company.select_one('span.company').get_text()
    print(f"Scrapping ALBAMON : {company_name}")

    response = requests.get(company_link)
    if response.status_code == 200:
        html = response.text
        soup = bs(html, 'html.parser')
        store_list = soup.select_one('#NormalInfo > table').select('tr')
        compony_data = []
        for store in store_list:
            if local := store.select_one('td.local'):
                store_data = []
                try:
                    store_data.append(local.get_text().replace('\xa0', ' '))
                    store_data.append(store.select_one('td.title > a > span.company').get_text().replace('\xa0', ' '))
                    store_data.append(store.select_one('td.data > span').get_text().replace('\xa0', ' '))
                    store_data.append(store.select_one('td.pay > span.payIcon').get_text().replace('\xa0', ' ') +
                                      store.select_one('td.pay > span.number').get_text().replace('\xa0', ' '))
                    store_data.append(store.select_one('td.regDate').get_text())
                    compony_data.append(store_data)
                except Exception as e:
                    print(type(e))
                    print(store)

        save_to_file(company_name, compony_data)

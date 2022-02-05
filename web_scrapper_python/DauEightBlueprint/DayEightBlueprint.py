from DauEightBlueprint.albamon import extract_albamon_super_brand_pages, each_company_save_csv

for company in extract_albamon_super_brand_pages():
    each_company_save_csv(company)

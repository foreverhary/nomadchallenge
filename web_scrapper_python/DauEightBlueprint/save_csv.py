import csv


def save_to_file(title, jobs):
    title = title.replace('/', '_')
    with open(f"{title}.csv", mode="w", newline='') as f:
        writer = csv.writer(f)
        writer.writerow(['place', 'title', 'time', 'pay', 'date'])
        for job in jobs:
            writer.writerow(job)

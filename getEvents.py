import requests
import json
from bs4 import BeautifulSoup

URL = "https://events.ucf.edu/"
r = requests.get(URL)

#print(r.content)

soup = BeautifulSoup(r.content, 'html5lib')

#print(soup.prettify())

eventsHTML = soup.find('ul', attrs = {'class': "event-list list-unstyled"})
eventsHTML = eventsHTML.findAll('li')
events = []

#print(eventsHTML)
#print(eventsHTML.prettify())
eventNum = 1
for row in eventsHTML:

    temp = dict()
    temp['Title'] = row.find('a').text.strip()
    temp['URL'] = 'https://events.ucf.edu' + row.find('a')['href']
    temp['Date'] = row.find('span', {'class': 'start-date'}).text.strip()
    temp['StartTime'] = row.find('span', {'class': 'start-time'}).text.strip()
    temp['EndTime'] = row.find('time', {'class':'dtend'}).text.strip()
    temp['Location'] = soup.find('div', {'class': 'location'}).text.strip()
    temp['Description'] = soup.find('p', {'class': 'description'}).text.strip()

    events.append(temp)


f = open('test', 'w')
f.write(json.dumps(events, indent = 4))
f.close()
    


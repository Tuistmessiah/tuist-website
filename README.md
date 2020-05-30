# React Documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Connecting to the server

This app is build to work and be dependent on the [TUIST API](https://github.com/Tuistmessiah/nether-api). Also a [TUIST Backoffice](https://github.com/Tuistmessiah/tuist-backoffice) is available. To run this application and connect to the API, create the file `auth.json` in `/frontend/data/` with:

```
{
  "basicToken": "aComplicatedToken",
  "API_URL": {
    "auth_mode": "either 'web' or 'local'",
    "local": "http://localhost:5000",
    "web": "URL through the internet"
  }
}

```

The `token` needs to be provided by the server owner. The `auth_mode` lets you decide between a online served API or a local one (by default you have `local` and `web` available) .

# Adding sections

Since content is dynamic, the backend should always have the required data to render each section. In case it doesn't, the sections should show a defualt component showing the user a non intrusive message explaining no data exists. The app is arquitected to fetch all data and meta data relevant on a page start and for that page. So any addition of a section in the DB will already appear in that same object fetched for the page.

So when adding a new section to the app, the developer should:

- (React) Create new section component and make a data model of its contents (in JSON form)
- (Backoffice) Add a 'section' entry in the DB with that JSON, with the respective 'page' and 'section' (this is important because this data will come already with the data fetched on page start). To maintain coherence, when adding a section component (e.g: HeroSection), call the 'section_name' value in the DB the same as the section name, all letter lowercases (e.g: 'hero').
- Pass, through props, all data needed from the object fetched on the page start. Always protect the sections against unfetched data.

## Development

App can be run locally. An alternative to build a local DB with a server API is to use the online backoffice [API](http://www.tuistmessiah.com/tuist-backoffice). Just do not forget to edit the `auth.json`.

### DB considerations

Whenever possible, `mockData/sections` in the backend should reflect also changes in the frontend code. This allows for frontend development using a local database to show all UX content in an appropriate way. Not crucial though.

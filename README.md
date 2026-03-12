# Group-5: Type2Code
[Type2Code](https://group-5-pink.vercel.app) is a web application that aims to help programmers transition from drag-and-drop platforms to real text-based programming. The platform uses incremental learning and repetition in order to build confidence in manually typing code. Type2Code helps incoming programmers develop the skills needed to work on bigger projects. The application is available at https://group-5-pink.vercel.app.

## Live Demo:
https://group-5-pink.vercel.app

## User Documentation:
**User Manual**
Instructions for running the application locally.
- [Run with Docker](https://github.com/Soft-II-Group-5-Type2Code/Group-5/blob/main/docs/manuals/user/run_with_docker.md)

## Developer Documentation
**Developer Setup**
Instructions for running the project for development.
- [Run with Makefile](https://github.com/JacksonH-W/Group-5/blob/main/docs/manuals/developer/SETUP.md)
  
**Architecture and System Design**
Describes the system architecture, database design, API endpoints, and deployment structure.
- [Project Architecture and Design](https://github.com/JacksonH-W/Group-5/blob/main/docs/manuals/developer/SETUP.md)

**Coding Guidelines**
Developers contributing to this project should follow these coding standards.
- **Python (most recent version):** https://peps.python.org/pep-0008/  
- **SQLAlchemy:** https://docs.sqlalchemy.org/en/21/orm/session_basics.html  
- **JavaScript:** https://developer.mozilla.org/en-US/docs/MDN/Writing_guidelines/Code_style_guide/JavaScript  
- **HTML:** https://www.w3schools.com/html/html5_syntax.asp  
- **CSS:** https://docs.ckan.org/en/2.9/contributing/css.html

## Testing:
Tests are organized in the backend using this structure:
```
backend/tests/unit/
backend/tests/validation/
backend/tests/integration/
backend/tests/system/
```
Run tests locally:
```
cd backend
pytest -q
```
Run with coverage:
```
pytest --cov=app --cov-report=term-missing
```
Tests are also run automatically through GitHub Actions CI on pushes and pull requests.

## Issue Tracking / Bug Reporting:
To report a bug click[ here](https://github.com/Soft-II-Group-5-Type2Code/Group-5/issues). Feel free to use the "Bug Report" teamplate. 

Example bug report format:
- [Example Bug Report](https://github.com/JacksonH-W/Group-5/blob/main/docs/example-issue/bug-report-example.md)

## Deployment:
The projects tools for deployment:
- Frontend: React hosted on Vercel
- Backend: FastAPI hosted on Render
- Database: PostgreSQL hosted on Supabase

## Team Members:
Rustislav Boulton <br>
Email: boultonr@oregonstate.edu <br>
Discord: pikadrago <br>

Logan Bachman <br>
Email: bachmanl@oregonstate.edu <br>
Discord: loganbachman_43291<br>

Name Jackson<br>
Email: happelwj@oregonstate.edu <br>
Discord: jacksonhw <br>

Ulises Cordova<br>
Email: cordovau@oregonstate.edu<br>
Discord: ulises_58165<br>

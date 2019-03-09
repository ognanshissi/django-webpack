Django webpack Reactjs Boilerplate
==================================

This boilerplate will help you start a django project with ReactJS in the frontend

Installation
----
1 - Clone the project directory 

Clone the folder inside your working directory

`
git clone https://github.com/ognanshissi/django-webpack.git
`

2 - Create a virtual environment and set the project up and running

On Linux, install `virtualenv` with this command `````sudo apt install virtualenv`````

Now move inside the project and write these commands:

To create a virtualenv for the project

`````
virtualenv --python python3 env
`````

Activate the virtual environment

`````
source env/bin/activate
`````

Install project dependencies for django

`````
pip3 install -r src/requirements.txt
`````

Install node dependencies

````
cd src/
yarn: 
    yarn or yarn install
npm:
    npm install
````

start running your application
Inside `src`
```
yarn watch or npm run watch

./manage.py runserver
```
Open your browser and go to [http://localhost:8000]()


Thank You
=========
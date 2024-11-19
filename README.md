
Hi, this github repository is for all the users who wants to do integration testing in their project. First clone this project , then npm install , node version 18 I have used. So you can use this node version.
Now make .env file. A .env.example is already present so you can make a new file with the name of .env and copy the contents of .env.example and subsequesntly replace the database url with you production database url. 

Now you can run "npm run test:integration" . Make sure you have bash installed in your local machine. And then the scripts will run and you see the integration test will run.

For the CI/CD I have placed a .yml file in .github.workflows so when you will make a pull request then the integration test will also run. 

For the CI/CD to run correctly you will need to go to Setting, then Secrets and Variable , then Actions and add a repository secret variable, the name of the variable should be DATABASE_URL and value should be your production database url . I have used PostgreSQL. 

Thanks, enjoy and have a great day . You can contact me on www.umardev.com

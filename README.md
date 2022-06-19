# NPM - Build multiple environments

1. Nội dung
    1. Tạo các environment
        1. .env.dev
            
            ```python
            PORT=3001
            REACT_APP_TITLE="Dev environment"
            ```
            
        2. .env.prod
            
            ```python
            PORT=3002
            REACT_APP_TITLE="Prod environment"
            ```
            
        3. .env.qa
            
            ```python
            PORT=3003
            REACT_APP_TITLE="QA environment"
            ```
            
        4. .env.staging
            
            ```python
            PORT=3004
            REACT_APP_TITLE="Staging environment"
            ```
            
    2. Tải module env-cmd
        
        ```python
        $ npm install env-cmd
        ```
        
    3. Thêm script vào package.json
        
        ```python
        "scripts": {
        	...
        	"start:dev": "env-cmd -f .env.dev npm start",
            "start:prod": "env-cmd -f .env.prod npm start",
            "build:dev": "env-cmd -f .env.dev npm run build",
            "build:prod": "env-cmd -f .env.prod npm run build",
            "build:qa": "env-cmd -f .env.qa npm run build",
            "build:staging": "env-cmd -f .env.staging npm run build",
        	...
        }
        ```
        
    4. Sửa file App.js
        
        ```python
        ...
        <h1>{process.env.REACT_APP_TITLE}</h1>
        ...
        ```
        
    5. Runserver
        
        ```python
        # runserver with dev environment
        $ npm run start:dev
        
        # runserver with prod environment
        $ npm run start:prod
        
        # build with prod environment
        $ npm run build:prod
        ```
        
    6. Kết quả
        
        ![Untitled](https://i.imgur.com/MbipQkp.png)
        
        ![Untitled](https://i.imgur.com/0Nfv3Ls.png)
        
2. Tài liệu tham khảo
    1. [https://www.opcito.com/blogs/managing-multiple-environment-configurations-in-react-app](https://www.opcito.com/blogs/managing-multiple-environment-configurations-in-react-app)
    2. [https://dev.to/rajeshroyal/handle-multiple-environments-in-reactjs-dev-stag-prod-1b9e](https://dev.to/rajeshroyal/handle-multiple-environments-in-reactjs-dev-stag-prod-1b9e)
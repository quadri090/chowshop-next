**Project Architecture**

-All react pages in the initial project will be renderded as a Nextjs Page
-components folder will be created for components
-assets folder will be created for assets like images
-context folder will be created for the react contextAPI
-A database for storing user data will be created. The Schema will contain username, email, phonenumber, password, isverified, isAdmin, forgotPasswordToken, ForgotPasswordTokenExpiry, verifyToken, verifyTokenExpiry.
    We may not use the email but find a service for sending verification text message to the user provided phone number. This isn't neccessary for user verification because users who want to order on the app will provide reacheable phone numbers. Therefore the service will be most useful for password reset.

-Middleware should prevent access to login and signup pages if a user is logged in, it should also prevent access to orderverification, orderfailed and ordersuccessful pages if user isnt logged in
-


**Dependencies**
-We need to install
    -frontend
        -React
        -react-dom
        -react-icons
        -typeit-react
        -swiperjs
        -notistack

    -Backend
        -Nextjs
        -BcryptJs
        -nodemailer
        -jsonwebtoken
        -axios
        -mongoose
        -nodemailer
        -flutterwave-react




-There's a lot i don't understand yet with this project, but we'll figure it out along the way

echo "# chowshop-next" >> README.md

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/quadri090/chowshop-next.git
git push -u origin main
# KeyVault - Password Manager

KeyVault is a secure and intuitive password manager application designed to help users manage their passwords and sensitive information effectively. It provides a seamless user experience with features like secure storage, local storage persistence, and a user-friendly interface for adding, viewing, and copying passwords.

---

## Description

KeyVault offers a secure and convenient solution for managing passwords and sensitive information. With an intuitive interface and robust security measures, users can trust KeyVault to keep their data safe and easily accessible.

---

## Features

- **Data Encryption**: Store passwords and sensitive information in encrypted form.
- **User-Friendly Interface**: Intuitive UI for adding, viewing, and copying passwords.
- **Local Storage Persistence**: Persist user entries across sessions using local storage.
- **Entry Expansion**: View additional details of entries such as username and password.
- **Password Copying**: Copy passwords to the clipboard with a click of a button.

---

## Technologies Used

- **Frontend**:
  - React.js
  - React Router DOM
  - react-simple-typewriter (for typewriter effect)

- **Backend**:
  - Node.js
  - Express.js
  - auth0 (for authenticating user credentials for signing in)
  - MongoDB (for storing user credentials)
- **Styling**:
  - CSS

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/trulyaman25/keyvault.git
```

2. Navigate to the project directory:
3. Install dependencies:
4. Set up MongoDB:
- Create a MongoDB Atlas account and set up a cluster.
- Update the MongoDB connection string in `backendServer.js`.
5. Create environment variables in the .env file
6. Start the development server:
7. Open your browser and navigate to `http://localhost:5173` to access the application.

---

## Usage

1. **Sign Up**:
- Create a new account by providing your fullname, username, email, and password.

2. **Sign In**:
- Log in to your account with your username and password.

3. **Dashboard**:
- Add, view, and manage your passwords and other sensitive information in the dashboard.


---

## Improvements

- **Password Strength Checker:** Implement a feature that checks the strength of user passwords to ensure they meet certain criteria.
- **Two-Factor Authentication (2FA):** Offer users the option to enable two-factor authentication for an added layer of security during login.
- **Improved UX/UI**: Enhance user experience with a more intuitive and visually appealing interface.
- **Cross-Device Sync**: Enable synchronization of passwords across multiple devices for user convenience.

---

## Future Goals

- **Multi-Language Support**: Add support for multiple languages to cater to a wider user base.
- **Mobile Application**: Develop a mobile app version of KeyVault for seamless access on mobile devices.
- **Password Generator**: Incorporate a password generator feature to help users create strong and unique passwords.
- **Browser Extensions**: Create browser extensions for popular browsers to facilitate password autofill and management.

---

## Images

  ![image](src/components/assets/images/prototypeImages/imageOne.png)
  ![image](src/components/assets/images/prototypeImages/imageTwo.png)
  ![image](src/components/assets/images/prototypeImages/imageThree.png)
  ![image](src/components/assets/images/prototypeImages/imageFour.png)
  ![image](src/components/assets/images/prototypeImages/imageFive.png)
  ![image](src/components/assets/images/prototypeImages/imageSix.png)
  ![image](src/components/assets/images/prototypeImages/imageSeven.png)
  ![image](src/components/assets/images/prototypeImages/imageEight.png)

---
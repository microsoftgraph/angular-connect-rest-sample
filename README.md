# Office 365 Angular Connect sample using Microsoft Graph

Connecting to Office 365 is the first step every app must take to start working with Office 365 services and data. This sample shows how to connect and then call the Microsoft Graph API (previously called Office 365 unified API), and uses the Office Fabric UI to create an Office 365 experience.

> Note: Try out the [Get started with Office 365 APIs](http://dev.office.com/getting-started/office365apis?platform=option-angular#setup) page which simplifies registration so you can get this sample running faster.

![Office 365 Angular Connect sample screenshot](./README assets/screenshot.png)

## Prerequisites

To use the Office 365 Angular Connect sample, you need the following:
* [Node.js](https://nodejs.org/). Node is required to run the sample on a development server and to install dependencies. 
* An Office 365 account. You can sign up for [an Office 365 Developer subscription](https://aka.ms/devprogramsignup) that includes the resources that you need to start building Office 365 apps.

     > Note: If you already have a subscription, the previous link sends you to a page with the message *Sorry, you can’t add that to your current account*. In that case use an account from your current Office 365 subscription.

## Register the app

Registering your web application is the first step. 

1. Sign in to the [Azure portal](https://portal.azure.com/).
2. On the top bar, click on your account and under the **Directory** list, choose the Active Directory tenant where you wish to register your application.
3. Click on **More Services** in the left hand nav, and choose **Azure Active Directory**.
4. Click on **App registrations** and choose **Add**.
5. Enter a friendly name for the application, for example 'MSGraphConnectAngular' and select 'Web app/API' as the **Application Type**. For the Sign-on URL, enter *http://127.0.0.1:8080/*. Click on **Create** to create the application.
6. While still in the Azure portal, choose your application, click on **Settings** and choose **Properties**.
7. Find the Application ID value and copy it to the clipboard.
8. Configure Permissions for your application:
9. In the **Settings** menu, choose the **Required permissions** section, click on **Add**, then **Select an API**, and select **Microsoft Graph**.
10. Then, click on Select Permissions and select **Sign in and read user profile** and **Send mail as a user**. Click **Select** and then **Done**.

## Configure and run the app

1. Using your favorite IDE, open **config.js** in *public/scripts*.
2. Replace *ENTER_YOUR_CLIENT_ID* with the Application ID of your registered Azure application.
3. Install project dependencies with Node's package manager (npm) by running ```npm install``` in the project's root directory on the command line.
4. Start the development server by running ```node server.js``` in the project's root directory.
5. Navigate to ```http://127.0.0.1:8080/``` in your web browser.

To learn more about the sample, visit the [Angular walkthrough on graph.microsoft.io.](http://graph.microsoft.io/docs/platform/angular).

<a name="contributing"></a>
## Contributing ##

If you'd like to contribute to this sample, see [CONTRIBUTING.MD](/CONTRIBUTING.md).

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Questions and comments

We'd love to get your feedback about the Office 365 Angular Connect sample. You can send your questions and suggestions to us in the [Issues](https://github.com/OfficeDev/O365-Angular-Microsoft-Graph-Connect/issues) section of this repository.

Your feedback is important to us. Connect with us on [Stack Overflow](http://stackoverflow.com/questions/tagged/office365+or+microsoftgraph). Tag your questions with [MicrosoftGraph] and [office365].
  
## Additional resources

* [Office Dev Center](http://dev.office.com/)
* [Microsoft Graph API](http://graph.microsoft.io)
* [Office 365 Profile sample for Angular](https://github.com/OfficeDev/O365-Angular-Profile)
* [Office UI Fabric](http://dev.office.com/fabric)

## Copyright
Copyright (c) 2016 Microsoft. All rights reserved.

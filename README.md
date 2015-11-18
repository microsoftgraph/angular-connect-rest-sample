# Office 365 Angular Connect sample using Microsoft Graph

Connecting to Office 365 is the first step every app must take to start working with Office 365 services and data. This sample shows how to connect and then call the Microsoft Graph API (previously called Office 365 unified API), and uses the Office Fabric UI to create an Office 365 experience.

> Note: Try out the [Get started with Office 365 APIs](http://dev.office.com/getting-started/office365apis?platform=option-angular#setup) page which simplifies registration so you can get this sample running faster.

![Office 365 Angular Connect sample screenshot](./README assets/screenshot.png)

## Prerequisites

To use the Office 365 Angular Connect sample, you need the following:
* [Node.js](https://nodejs.org/). Node is required to run the sample on a development server and to install dependencies. 
* An Office 365 account. You can sign up for [an Office 365 Developer subscription](https://portal.office.com/Signup/Signup.aspx?OfferId=6881A1CB-F4EB-4db3-9F18-388898DAF510&DL=DEVELOPERPACK&ali=1#0) that includes the resources that you need to start building Office 365 apps.

     > Note: If you already have a subscription, the previous link sends you to a page with the message *Sorry, you can’t add that to your current account*. In that case use an account from your current Office 365 subscription.
* A Microsoft Azure tenant to register your application. Azure Active Directory (AD) provides identity services that applications use for authentication and authorization. A trial subscription can be acquired here: [Microsoft Azure](https://account.windowsazure.com/SignUp).

     > Important: You also need to make sure your Azure subscription is bound to your Office 365 tenant. To do this, see the Active Directory team's blog post, [Creating and Managing Multiple Windows Azure Active Directories](http://blogs.technet.com/b/ad/archive/2013/11/08/creating-and-managing-multiple-windows-azure-active-directories.aspx). The section **Adding a new directory** will explain how to do this. You can also see [Set up your Office 365 development environment](https://msdn.microsoft.com/office/office365/howto/setup-development-environment#bk_CreateAzureSubscription) and the section **Associate your Office 365 account with Azure AD to create and manage apps** for more information.
* A client ID of an application registered in Azure. This sample application must be granted the **Send mail as signed-in user** and **Send mail as signed-in user** permissions for the **Microsoft Graph** application. [Add a web application in Azure](https://msdn.microsoft.com/office/office365/HowTo/add-common-consent-manually#bk_RegisterWebApp) and [grant the proper permissions](https://github.com/OfficeDev/O365-Angular-Microsoft-Graph-Connect/wiki/Grant-permissions-to-the-Connect-application-in-Azure) to it.

     > Note: During the app registration process, make sure to specify **http://127.0.0.1:8080/** as the **Sign-on URL**.

## Configure and run the app

1. Using your favorite IDE, open **config.js** in *public/scripts*.
2. Replace *ENTER_YOUR_CLIENT_ID* with the client ID of your registered Azure application.
3. Install project dependencies with Node's package manager (npm) by running ```npm install``` in the project's root directory on the command line.
4. Start the development server by running ```node server.js``` in the project's root directory.
5. Navigate to ```http://127.0.0.1:8080/``` in your web browser.

To learn more about the sample, visit the [Angular walkthrough on graph.microsoft.io.](http://graph.microsoft.io/docs/platform/angular). 

## Questions and comments

We'd love to get your feedback about the Office 365 Angular Connect sample. You can send your questions and suggestions to us in the [Issues](https://github.com/OfficeDev/O365-Angular-Microsoft-Graph-Connect/issues) section of this repository.

Your feedback is important to us. Connect with us on [Stack Overflow](http://stackoverflow.com/questions/tagged/office365+or+microsoftgraph). Tag your questions with [MicrosoftGraph] and [office365].
  
## Additional resources

* [Office Dev Center](http://dev.office.com/)
* [Microsoft Graph API](http://graph.microsoft.io)
* [Office 365 Profile sample for Angular](https://github.com/OfficeDev/O365-Angular-Profile)
* [Office UI Fabric](http://dev.office.com/fabric)

## Copyright
Copyright (c) 2015 Microsoft. All rights reserved.

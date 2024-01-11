# Clerk.io Connector  - Umbraco Package 

Welcome to Clerk.io connector, the transformative Umbraco package designed to revolutionize your e-commerce projects developed using Umbraco Commerce. Clerk.io is a leading platform that specializes in e-commerce personalization, providing powerful tools for optimizing product recommendations, search functionality, and customer insights. With the Clerk.io Umbraco package, you can seamlessly integrate this platform with your Umbraco Commerce project, unlocking a new realm of possibilities for data sharing.  

# Getting Started 
- [Umbraco Commerce](https://marketplace.umbraco.com/package/umbraco.commerce) : Ensure your e-commerce project is built using Umbraco Commerce to leverage the Clerk.io package.
- [Clerk.io Account](https://my.clerk.io/login) - Create a Clerk.io account to access a wealth of e-commerce personalization tools and functionalities.
- Package Configuration - Utilize the package's user-friendly interface to seamlessly configure your Clerk.io account, set up API keys, and map essential data fields.

# Package Configuration

## API Key Configuration

To generate the API key, below are steps you may follow:

- Visit the [Clerk.io](https://www.clerk.io/) website and log in to your account.
- Access API Keys Section and copy Public API key.
- Configure API Key : Enter key in umbraco backoffice > Clerk.io > Clerk.io API Configuration as shown in below image:

 ![API Key Configuration](https://github.com/Nikhilgirirajdigital/clerk.io-connector/blob/main/Assets/API%20Key%20Configuration.png)

## Feed Configuration

The Feed configuration feature in the Umbraco system empowers the admin user to finely tune and control the details that are shared with Clerk.io, ensuring a seamless and accurate integration of product data between the two systems.

### Document Type Selection

Choose the appropriate Document Type that represent the product,category and content pages to be shared with Clerk.io.

### Individual Feed Data Mapping

- For individual data, map Clerk.io properties to corresponding Umbraco properties. This includes fields such as product name, description, price, and other relevant details.
- Utilize the user-friendly interface to add new property mappings, update existing ones, or remove mappings that are no longer required.

### Save Configuration

Ensure that all configurations are saved, securing the settings for seamless integration. 

![Feed Configuration](https://github.com/Nikhilgirirajdigital/clerk.io-connector/assets/124665688/8146fc63-638e-4349-87eb-49b426dd9e31)

## Audit Data Tracking

Admin users can effortlessly monitor the data shared with Clerk.io through the package's intuitive interface. The system provides detailed logs, including timestamps and specific paths, ensuring transparency and accountability in the data-sharing process. Any errors encountered during the exchange are highlighted, allowing for quick resolution. 

![Feed Logs](https://github.com/Nikhilgirirajdigital/clerk.io-connector/assets/124665688/97e19e9c-6aad-458b-8229-b0b8fe98a186)

# Clerk.io Data Sync Settings

To ensure seamless data synchronization between your Umbraco system and Clerk.io, follow these steps within your Clerk.io account: 

 - Login into [My Clerk.io](https://my.clerk.io/login)
 - Navigate to Data Sync Page : Access the Data Sync Page directly from the menu within your Clerk.io account. 
 - Locate "Data Sync Settings" Section : Within the Data Sync Page, you will find a dedicated section labeled "Data Sync Settings." 
 - Choose Sync Method: In the "Data Sync Settings" section, locate the "Sync Method" option. Select "Clerk.io JSON Feed V2" as the synchronization method. 
 - Fill out Information : A set of fields will be displayed, including "JSON Product URL," "JSON Categories URL," "JSON Orders URL," and others. Refer to the accompanying screenshot for guidance.
	- JSON Product URL -  {your site url}/clerk/products.json
	- JSON Category URL - {your site url}/clerk/categories.json
	- JSON Orders URL - {your site url}/clerk/orders.json
	- JSON Customers URL - {your site url}/clerk/customers.json
	- JSON Pages URL - {your site url}/clerk/pages.json

![Clerk io Portal Feed Configuration](https://github.com/Nikhilgirirajdigital/clerk.io-connector/assets/124665688/cd241443-e7cd-4ee5-8221-74c80cc8026e)

# Reference Links

- [Clerk.io Account](https://my.clerk.io/login)
- [Clerk.io Feed Examples](https://docs.clerk.io/docs/data-feed#products)

const AWSConfig = {
  amp: {
    region: "us-east-2",
    identityPoolId: "us-east-2:07111208-9c7a-4489-9f70-622e6e07aabc",
    userPoolId: "us-east-2_jFOzJLDCw",
    userPoolWebClientId: "61a00bfpjdkgguhmk48j1f5h4e",
    mandatorySignIn: false
  },
  appSync: {
    url: "https://5wxmbonewrebjp35a27voky3ve.appsync-api.us-east-2.amazonaws.com/graphql",
    region: "us-east-2"
  }
};

const AddPostFomSchema = {
  uiSchema: {
    form: {
      content: {
        "ui:widget": "textarea",
        "ui:options": {
          rows: 10
        }
      },
      notificationEmails: {
        "ui:help": "Separate email addresses with a comma"
      }
    }
  },
  schema: {
    title: "",
    RUT: "",
    description: "",
    type: "object",
    properties: {
      form: {
        title: "Add Post",
        type: "object",
        required: ["title", "content"],
        // required: ["title", "RUT","content"],
        properties: {
          title: {
            title: "Title",
            type: "string"
          },
          // RUT: {
          //   title: "RUT",
          //   type: "string"
          // },
          content: {
            type: "string",
            title: "Content"
          },
          notificationEmails: {
            type: "string",
            title: "Notification Emails"
          }
        }
      }
    }
  }
};

export { AWSConfig, AddPostFomSchema };

// Inicializar el proveedor de credenciales de Amazon Cognito
// AWS.config.region = 'us-east-2'; // Región
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-2:d1aec212-5a2c-49ce-ab6e-f67f175c3a9e',
// });

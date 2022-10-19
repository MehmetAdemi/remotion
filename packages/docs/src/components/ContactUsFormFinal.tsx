import * as React from "react";
import { Field } from "./ContactUsField";
import type { IFields } from "./ContactUsForm";
import { Form, isEmail, maxLength, required } from "./ContactUsForm";

export const ContactUsForm: React.FC = () => {
  const fields: IFields = {
    name: {
      id: "name",
      label: "Name",
      validation: { rule: required },
    },
    email: {
      id: "email",
      label: "Email",
      validation: { rule: isEmail },
    },
    reason: {
      id: "reason",
      label: "Reason",
      editor: "dropdown",
      options: ["", "Marketing", "Support", "Feedback", "Jobs"],
      validation: { rule: required },
    },
    notes: {
      id: "notes",
      label: "Notes",
      editor: "multilinetextbox",
      validation: { rule: maxLength, args: 1000 },
    },
  };
  return (
    <Form
      action="http://localhost:4351/api/contact-us"
      fields={fields}
      render={() => (
        <React.Fragment>
          <div className="alert alert-info" role="alert">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Enter the information below and <br /> we'll get back to you as
              soon as we can.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Field {...fields.name} />
            <Field {...fields.email} />
            <Field {...fields.reason} />
            <Field {...fields.notes} />
          </div>
        </React.Fragment>
      )}
    />
  );
};

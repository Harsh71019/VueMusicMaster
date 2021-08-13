import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";
import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email as Email,
  min_value as minValue,
  max_value as maxValue,
  confirmed,
  not_one_of as excluded,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("alpha_spaces", alphaSpaces);
    defineRule("Email", Email);
    defineRule("minValue", minValue);
    defineRule("maxValue", maxValue);
    defineRule("passwords_mismatch", confirmed);
    defineRule("excluded", excluded);
    defineRule("country_excluded", excluded);
    defineRule("tos", required);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `The field ${ctx.field} is required`,
          min: `The field ${ctx.field} is to short`,
          max: `The field ${ctx.field} is to long`,
          alpha_spaces: `The field ${ctx.field} may only contain alphabetic spaces`,
          email: `The field ${ctx.field} must be a valid email address`,
          min_value: `The field ${ctx.field} is to low`,
          max_value: `The field ${ctx.field} is to high`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}`,
          country_excluded: `Due to restrictions we cannot sign up from these locations `,
          passwords_mismatch: `Password do not match`,
          tos: `Please accept the terms of service`,
        };

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid. Please try again`;
        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true,
    });
  },
};

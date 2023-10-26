// Components
import VStepper from "./VStepper.mjs";
import VStepperContent from "./VStepperContent.mjs";
import VStepperStep from "./VStepperStep.mjs"; // Utilities
import { createSimpleFunctional } from "../../util/index.mjs";
const VStepperHeader = createSimpleFunctional('v-stepper__header');
const VStepperItems = createSimpleFunctional('v-stepper__items');
export { VStepper, VStepperContent, VStepperStep, VStepperHeader, VStepperItems };
export default {
  $_vuetify_subcomponents: {
    VStepper,
    VStepperContent,
    VStepperStep,
    VStepperHeader,
    VStepperItems
  }
};
//# sourceMappingURL=index.mjs.map
import { FormControl, FormGroup } from "@angular/forms";

export function showValidationMessage(formGroup: FormGroup) {

    for (const key in formGroup.controls) {
        if (formGroup.controls.hasOwnProperty(key)) {
            const control: FormControl = <FormControl>formGroup.controls[key];

            if (Object.keys(control).includes('controls')) {
                const formGroupChild: FormGroup = <FormGroup>formGroup.controls[key];
                showValidationMessage(formGroupChild);
            }

            control.markAsDirty();
            control.markAsTouched();
        }
    }
}
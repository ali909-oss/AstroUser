import React from 'react';
import {useFormikContext} from 'formik';

import AppButton from '../formFields/AppButton';

function SubmitButton({title, onPress}) {
  const {handleSubmit} = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} />;
}

export default SubmitButton;

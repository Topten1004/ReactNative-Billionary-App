import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import CsSelectGender from '../../../containers/CsSelectGender';
import CsAutocompleteSelect from '../../../containers/CsAutocompleteSelect';
import FloatingTextInput from '../../../containers/FloatingTextInput';
import I18n from '../../../i18n';

import styles from './style';
import Button from '../../../containers/Button';
import { CsSelect } from '../../../containers/CsSelect';

const theme = 'light';

const AddExperienceModal = ({isVisible, onBackdropPress}) => {

 const [job, setJob] = useState('');
 const [company, setCompany] = useState('');
 const [role, sedtRole] = useState('');
 const [yearsOfService, setYearsOfService] = useState('');
 const [salary, setSalary] = useState('');

  const onSubmit = () => {};

  const jobInput = useRef(null);
  const companyInput = useRef(null);

  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.title}>Add Experience</Text>
        <Text style={styles.descriptionText}>
          Thank you for your registration, before we move forward please verify
          your email address
        </Text>
        <CsAutocompleteSelect
          theme={theme}
          placeholder={'Type Your Job Name'}
          label="Job"
        />
        <FloatingTextInput
          inputRef={companyInput}
          value={job}
          returnKeyType="next"
          keyboardType="default"
          textContentType="oneTimeCode"
          label={I18n.t('Job')}
          placeholder={'Type Your Company Name'}
          onChangeText={job => setJob(job)}
          theme={theme}
          onSubmitEditing={() => {
            websiteInput.current.focus();
          }}
        />
        <FloatingTextInput
          inputRef={companyInput}
          value={job}
          returnKeyType="next"
          keyboardType="default"
          textContentType="oneTimeCode"
          label={I18n.t('Role')}
          placeholder={'Type Your Role Name'}
          onChangeText={job => setJob(job)}
          theme={theme}
          onSubmitEditing={() => {
            websiteInput.current.focus();
          }}
        />
        <CsSelect
          placeholder="Select"
          label="Years of Service"
          options={[ '0 - 2 years', '2 - 5 years', '5 - 7 years', '7 - 10 years', '10 - 12 years' ]}
          onSelect={(value)=>setYearsOfService(value)}
          theme={theme}
          value={yearsOfService}
        />
        <CsSelect
          placeholder="Select"
          label="Salary"
          options={[ '$0-$50,000', '$50,000-$60,000', '$70,000-$80,000', '$80,000-$100,000' ]}
          theme={theme}
          value={salary}
          onSelect={(value)=>setSalary(value)}
        />
        <Button
          style={styles.submitBtn}
          title={I18n.t('update')}
          size="W"
          onPress={onSubmit}
          testID="login-submit"
          //   loading={isLoading}
          theme={theme}
          pressingHighlight
        />
      </View>
    </Modal>
  );
};

export default AddExperienceModal;

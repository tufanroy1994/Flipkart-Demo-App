import React, {memo, useRef, useState} from 'react';
import {View, TextInput, Keyboard} from 'react-native';

import {styles} from './styles';

interface OtpInputPropsType {
  codeLength?: number;
  onCodeFilled: (code: string) => void;
  onOtpChange?: (otpArray: string[]) => void;
}

const BaseOTPField = ({
  codeLength = 6,
  onCodeFilled,
  onOtpChange,
}: OtpInputPropsType) => {
  const [otp, setOtp] = useState(Array(codeLength).fill(''));
  const inputs = useRef<Array<TextInput | null>>([]);

  const updateOtp = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    onOtpChange?.(newOtp);

    const code = newOtp.join('');
    if (!newOtp.includes('') && code.length === codeLength) {
      Keyboard.dismiss();
      onCodeFilled(code);
    }

    if (value !== '' && index < codeLength - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (index: number, e: any) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => {
            if (ref) inputs.current[index] = ref;
          }}
          style={styles.input}
          keyboardType="number-pad"
          maxLength={1}
          value={digit}
          onChangeText={val => updateOtp(index, val)}
          onKeyPress={e => handleKeyPress(index, e)}
          autoFocus={index === 0}
        />
      ))}
    </View>
  );
};

export default memo(BaseOTPField);

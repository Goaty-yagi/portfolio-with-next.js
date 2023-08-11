import { Radio, RadioGroup, Stack } from "@chakra-ui/react";


export default function AbstractRadio({ name, setter, defaltValue, config }) {
  return (
    <RadioGroup  value={name}>
      <Stack direction="row">
        {config.map((e, index) => (
            <Radio
              key={index}
              value={e.value}
              onChange={() => setter(e.value)}
            >
              {e.text}
            </Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
}
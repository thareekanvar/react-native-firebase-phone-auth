//@flow
import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '.';

describe('TextInput', () => {
    it('should render the proper input value', () => {
        const props = getProps({ value: 'my value' });
        const wrapper = shallow(<TextInput {...props} />);

        expect(wrapper.find('[testID="text-input"]').props().value).toEqual(
            props.value
        );
    });
    it('should render the proper input placeholder', () => {
        const props = getProps({ placeholder: 'my value' });
        const wrapper = shallow(<TextInput {...props} />);

        expect(
            wrapper.find('[testID="text-input"]').props().placeholder
        ).toEqual(props.placeholder);
    });
    it('should not render the error if no error was passed in', () => {
        const props = getProps({ error: null });
        const wrapper = shallow(<TextInput {...props} />);

        expect(wrapper.find('[testID="error"]').exists()).toBeFalsy();
    });
    it('should render the error message', () => {
        const props = getProps({ error: 'My error' });
        const wrapper = shallow(<TextInput {...props} />);

        expect(wrapper.find('[testID="error"]').props().children).toEqual(
            props.error
        );
    });
});

const getProps = defaultData => ({
    placeholder: 'My text input',
    value: '',
    onChangeText: jest.fn(),
    ...defaultData
});

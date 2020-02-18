//@flow
import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';
import Button from '.';

describe('Button', () => {
    it('should render the title', () => {
        const props = getProps();
        const wrapper = shallow(<Button {...props} />);

        expect(wrapper.find('[testID="title"]').props().children).toEqual(
            props.title
        );
    });
    it('should render the proper color', () => {
        const props = getProps();
        const wrapper = shallow(<Button {...props} />);

        expect(
            wrapper
                .find('[testID="container"]')
                .props()
                .style.findIndex(
                    style => style && style.backgroundColor === props.color
                )
        ).toBeGreaterThanOrEqual(0);
    });
    it('should not be touchable if disabled', () => {
        const props = getProps({ disabled: true });
        const wrapper = shallow(<Button {...props} />);

        expect(wrapper.find('Touchable').exists()).toBeFalsy();
    });
    it('should call onPress', () => {
        const props = getProps({ disabled: false, onPress: jest.fn() });
        const wrapper = shallow(<Button {...props} />);

        wrapper.find('Touchable').simulate('press');

        expect(props.onPress).toHaveBeenCalled();
    });
    it('should render an icon', () => {
        const icon = <View testID="my-icon"></View>;
        const props = getProps({ icon });
        const wrapper = shallow(<Button {...props} />);

        expect(wrapper.find('[testID="my-icon"]').exists()).toBeTruthy();
    });
});

const getProps = defaultData => ({
    title: 'myButton',
    color: 'green',
    ...defaultData
});

//@flow
import React from 'react';
import { shallow } from 'enzyme';
import TabBarIcon from '.';

describe('TabBarIcon', () => {
    it('should render the icon', () => {
        const props = getProps();
        const wrapper = shallow(<TabBarIcon {...props} />);

        expect(wrapper.find('[testID="icon"]').props().name).toEqual(
            props.name
        );
    });
    it('should render the icon with the proper color', () => {
        const props = getProps();
        const wrapper = shallow(<TabBarIcon {...props} />);

        expect(wrapper.find('[testID="icon"]').props().color).toEqual(
            props.color
        );
    });
});

const getProps = defaultData => ({
    name: 'ios-add',
    color: 'green',
    ...defaultData
});

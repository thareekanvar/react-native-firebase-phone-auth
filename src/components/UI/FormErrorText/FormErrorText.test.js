//@flow
import React from 'react';
import { shallow } from 'enzyme';
import FormErrorText from '.';

describe('FormErrorText', () => {
    it('should render the proper text', () => {
        const errorMessage = 'my Error';
        const wrapper = shallow(<FormErrorText>{errorMessage}</FormErrorText>);

        expect(wrapper.find('[testID="container"]').props().children).toEqual(
            errorMessage
        );
    });
});

//@flow
import React from 'react';
import { shallow } from 'enzyme';
import Touchable from '.';

const mockPlatform = OS => {
    jest.resetModules();
    jest.doMock('Platform', () => ({ OS, select: objs => objs[OS] }));
};

describe('Touchable', () => {
    describe('android', () => {
        it('should render the proper element for android', () => {
            mockPlatform('android');

            const wrapper = shallow(<Touchable></Touchable>);
            expect(
                wrapper.find('[testID="touch-android"]').exists()
            ).toBeTruthy();
        });
        it('should render the children', () => {
            mockPlatform('android');

            const children = 'test';
            const wrapper = shallow(<Touchable>{children}</Touchable>);
            expect(
                wrapper.find('[testID="touch-android"]').props().children
            ).toEqual(children);
        });
        it('should call onPress', () => {
            mockPlatform('android');

            const onPress = jest.fn();
            const wrapper = shallow(<Touchable onPress={onPress}></Touchable>);

            wrapper.find('[testID="touch-android"]').simulate('press');
            expect(onPress).toHaveBeenCalled();
        });
    });
    describe('ios', () => {
        it('should render the proper element for ios', () => {
            mockPlatform('ios');

            const wrapper = shallow(<Touchable></Touchable>);
            console.log(wrapper.debug());
            expect(wrapper.find('[testID="touch-ios"]').exists()).toBeTruthy();
        });
        it('should render the children', () => {
            mockPlatform('android');

            const children = 'test';
            const wrapper = shallow(<Touchable>{children}</Touchable>);
            expect(
                wrapper.find('[testID="touch-android"]').props().children
            ).toEqual(children);
        });
        it('should call onPress', () => {
            mockPlatform('ios');

            const onPress = jest.fn();
            const wrapper = shallow(<Touchable onPress={onPress}></Touchable>);

            wrapper.find('[testID="touch-ios"]').simulate('press');
            expect(onPress).toHaveBeenCalled();
        });
    });
});

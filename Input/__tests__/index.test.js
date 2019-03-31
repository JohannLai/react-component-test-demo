/* eslint-disable no-unused-vars */
import Input from '../Input';

describe('Input', () => {
    it('Input render correctly', () => {
        const wrapper = render(<Input />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Input pass props correctly', () => {
        // test props
        const props = {
            value: 'test',
            onChange: (value) => {},
        };

        const wrapper = mount(<Input {...props} />);

        expect(wrapper.props().value).toBe('test');
    });

    it('Input check the onChange callback', () => {
        const onChange = jest.fn();

        const props = {
            value: '123456',
            onChange,
        };

        const wrapper = mount(<Input {...props} />).find('input');
        wrapper.simulate('change', { target: { value: 888888 } });
        expect(onChange).toHaveBeenCalledWith(888888);
    });
});

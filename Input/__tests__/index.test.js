import Input from '../Input';

describe('Input', () => {
  it('Input render correctly', () => {
    const wrapper = render(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});

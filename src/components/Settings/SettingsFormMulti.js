import React, { PureComponent } from 'react';
import t from 'tcomb-form';
import PropTypes from 'prop-types';
import ReactSelect from './ReactSelect';
import './SettingsStyles.css';

const Form = t.form.Form;
const city = t.enums.of(
  [
    'Ahmednagar',
    'Akola',
    'Amravati',
    'Aurangabad',
    'Beed',
    'Bhandara',
    'Buldhana',
    'Chandrapur',
    'Dhule',
    'Gadchiroli',
    'Gondiya',
    'Hingoli',
    'Jalgaon',
    'Jalna',
    'Kolhapur',
    'Latur',
    'Malegaon',
    'Mumbai',
    'Nagpur',
    'Nanded',
    'Nandurbar',
    'Nashik',
    'Oras',
    'Osmanabad',
    'Parbhani',
    'Pune',
    'Raigad',
    'Ratnagiri',
    'Sangli',
    'Satara',
    'Sewagram',
    'Solapur',
    'Wardha',
    'Washim',
    'Yavatmal',
  ],
  'city',
);

const formLayout = locals =>
  <div className="formWrap">
    <div>
      {locals.inputs.name1}
    </div>
    <div>
      {locals.inputs.bio1}
    </div>
    <div>
      {locals.inputs.city1}
    </div>
    <div>
      {locals.inputs.name2}
    </div>
    <div>
      {locals.inputs.bio2}
    </div>
    <div>
      {locals.inputs.city2}
    </div>
  </div>;

const listTransformer = {
  format: value => (Array.isArray(value) ? value.join(',') : value),
  parse: str => (str ? str.split(',') : []),
};

const options = {
  template: formLayout,
  auto: 'none',
  order: ['city', 'name1', 'bio1', 'city1', 'name2', 'bio2', 'city2'],
  fields: {
    city: {
      label: 'City',
      factory: ReactSelect,
      transformer: listTransformer,
      attrs: {
        name: 'city',
        className: 'src_field_box',
      },
    },
    name1: {
      label: 'Name',
      attrs: {
        placeholder: 'Please enter name',
        className: 'src_field_box',
      },
    },
    name2: {
      label: 'Name',
      attrs: {
        placeholder: 'Please enter name',
        label: 'Name',
        className: 'src_field_box',
      },
    },
    bio1: {
      label: 'Bio',
      attrs: {
        placeholder: 'Please tell something about you',
        className: 'src_field_box',
      },
    },
    bio2: {
      label: 'Bio',
      attrs: {
        placeholder: 'Please tell something about you',
        className: 'src_field_box',
      },
    },
    city1: {
      label: 'City',
      factory: ReactSelect,
      transformer: listTransformer,
      attrs: {
        name: 'city1',
        className: 'src_field_box',
      },
    },
    city2: {
      label: 'City',
      factory: ReactSelect,
      transformer: listTransformer,
      attrs: {
        name: 'city2',
        className: 'src_field_box',
      },
    },
  },
};

const BasicSearch = t.struct({
  name1: t.String,
  name2: t.String,
  bio1: t.String,
  bio2: t.String,
  city1: t.list(city),
  city2: t.list(city),
});

class SettingsFormMulti extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    const [player1, player2] = props.data;
    this.state = {
      value: {
        name1: player1.name,
        bio1: player1.bio,
        city1: (player1.city || '').split(','),
        name2: player2.name,
        bio2: player2.bio,
        city2: (player2.city || '').split(','),
      },
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.form.getValue();
    if (value) {
      console.log(111, value);
      this.setState({ value });
      const formObj = [
        { name: value.name1, bio: value.bio1, city: value.city1.join(',') },
        { name: value.name2, bio: value.bio2, city: value.city2.join(',') },
      ];
      this.props.onSettingsSubmit(formObj);
    } else {
      console.log('Form Incomplete');
    }
  }

  resetForm() {
    this.setState({});
  }

  render() {
    return (
      <div>
        <Form
          ref={r => {
            this.form = r;
          }}
          options={options}
          type={BasicSearch}
          value={this.state.value}
        />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

SettingsFormMulti.propTypes = {
  onSettingsSubmit: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      city: PropTypes.string,
      bio: PropTypes.string,
    }),
  ).isRequired,
};

export default SettingsFormMulti;

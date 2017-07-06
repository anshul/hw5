import React, { PureComponent } from 'react';
import t from 'tcomb-form';
import PropTypes from 'prop-types';
import ReactSelect from './ReactSelect';
import './SettingsStyles.css';

class SettingsFormMulti extends PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    // this.state = { value: {name1: '', name2: '', bio1: '', bio2: '', city1: [], city2: []}};
    this.state = { name1: '', name2: '', bio1: '', bio2: '', city1: [], city2: [] };
  }

  // componentDidMount(){
  //   this.props.data.map( (player,index) => {
  //     if( index === 0 ){
  //       this.setState({value:{name1: player.name, bio1: player.bio, city1: player.city}});
  //     }
  //     if( index === 1 ){
  //       this.setState({value:{name2: player.name, bio2: player.bio, city2: player.city}});
  //     }
  //   });
  // }

  componentDidMount() {
    this.props.data.map((player, index) => {
      if (index === 0) {
        this.setState({ name1: player.name, bio1: player.bio, city1: player.city });
      }
      if (index === 1) {
        this.setState({ name2: player.name, bio2: player.bio, city2: player.city });
      }
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const value = this.refs.form.getValue();
    if (value) {
      const formObj = [
        { name: value.name1, bio: value.bio1, city: value.city1 },
        { name: value.name2, bio: value.bio2, city: value.city2 },
      ];
      this.props.onSettingsSubmit(formObj);
      this.resetForm();
    } else {
      console.log('Form Incomplete');
    }
  }

  resetForm() {
    this.setState({});
  }

  render() {
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

    return (
      <div>
        <Form ref="form" options={options} type={BasicSearch} value={this.state} />
        <button onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

SettingsFormMulti.PropTypes = {
  onSettingsSubmit: PropTypes.func.isRequired,
};

export default SettingsFormMulti;

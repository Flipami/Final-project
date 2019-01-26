// Dentro del componentDidMount 
const { user } = this.props
const { uid } = user;
const content = DatabaseApi.getDocumentById('users', uid);
const {name, surname, email, phone, address, country, motherlang, combinations, jobs} = this.state;
this.setState({name, surname, email, phone, address, country, motherlang, combinations, jobs});
console.log('ProfileForm ->', content)
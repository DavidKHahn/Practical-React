import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    people: []
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>People not found</div>;
    }

    const peopleJSX = this.state.people.map((person, i) => (
        <div key={`person-id-${i}`}>
          <div>{person.name.title}</div>
          <div>{person.name.first}</div>
          <div>{person.name.last}</div>
          <img src={person.picture.large} alt="person" />
        </div>
      ))

    return <div>{peopleJSX}</div>;
  }
}

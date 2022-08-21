import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPassedTrainingsAC } from './redux/actions';

function App(props) {
  const dispatch = useDispatch();
  const { loading, passedTrainings } = useSelector((state) => state.passedTrainings);
  React.useEffect(() => {
    dispatch(getPassedTrainingsAC());
  }, []);
  console.log(loading)
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="App">
      {passedTrainings.map((persona) => {
        return (
          <div
            key={persona.name}
            style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
            <h5>{persona.name}</h5>
            <h5>{persona.birth_year}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default App;

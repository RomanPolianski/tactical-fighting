import './App.css';
import { Field } from './components/Field/Field';
import { combineUnits } from './gameMechanics/CombineUnits';
import { createTeam } from './gameMechanics/CreateTeam';
import { getTurnOrderUnitsTeam } from './gameMechanics/GetTurnOrderUnitsTeam';
import { Round } from './gameMechanics/Round';
import { TurnedUnits } from './gameMechanics/TurnedUnits';

function App() {
  const round = new Round();
  const turnedUnits = new TurnedUnits([]);
  const { firstTeam, secondTeam } = createTeam();
  const firstTeamOrder = getTurnOrderUnitsTeam(firstTeam);
  const secondTeamOrder = getTurnOrderUnitsTeam(secondTeam);
  const combineOrder = combineUnits(firstTeamOrder, secondTeamOrder);

  return (
    <Field
      round={round}
      roundTurnedUnits={turnedUnits}
      firstTeam={firstTeam}
      secondTeam={secondTeam}
      firstTeamOrder={firstTeamOrder}
      secondTeamOrder={secondTeamOrder}
      combineOrder={combineOrder}
    ></Field>
  );
}

export default App;

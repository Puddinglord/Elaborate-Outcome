import { ElaborateCombat } from './module/elaborate-combat';

Hooks.once('init', () => {
    console.log('Starting Elaborate Combat...');
//   game.settings.register('combat-qol', 'currentGameSystem', {
//     name: 'COMBAT_QOL.currentGameSystem',
//     hint: 'COMBAT_QOL.currentGameSystemHint',
//     scope: 'world',
//     config: true,
//     default: 'pf2e',
//     type: String,
//     choices: {
//       pf2e: 'COMBAT_QOL.pf2e',
//       dnd5e: 'COMBAT_QOL.dnd5e',
//     },
//     onChange: () => location.reload(),
//   });

  const elaborateCombat = new ElaborateCombat();
  elaborateCombat.listenForHooks();
});

console.log('Hello World!!');
const elaborateCombat = new ElaborateCombat();
elaborateCombat.listenForHooks();
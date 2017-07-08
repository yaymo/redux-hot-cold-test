import reducer from './reducer';
import {newGame, makeGuess, toggleInfoModal} from './actions';


describe('reducer', () => {
	it('should set initial state', () => {
		const state = reducer(undefined, {type:'__UNKNOWN'});
		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
		expect(state.showInfoModal).toEqual(false);
	});

	it('should return state on unknown action', () => {
		let currentState = {};
		const state = reducer(currentState, {type: '__UNKNOWN'});
		expect(state).toBe(currentState);
	});

	describe('newGame', () => {
		it('should start a new game', () => {
			let state;
			state = reducer(state, newGame());
			expect(state.guesses).toEqual([]);
			expect(state.feedback).toEqual('Make your guess!');
			expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
			expect(state.correctAnswer).toBeLessThanOrEqual(100);
		});
	});

	describe('makeGuess', () => {
		it('should make a guess', () => {
			let state = {
				guesses: [],
				feedback: '',
				correctAnswer: 100
			};
			state = reducer(state, makeGuess(10));
			expect(state.guesses).toEqual([10]);
			expect(state.feedback).toEqual('You\'re Ice Cold...');
			state = reducer(state, makeGuess(55));
			expect(state.guesses).toEqual([10, 55]);
			expect(state.feedback).toEqual('You\'re Cold...');
			state = reducer(state, makeGuess(80));
			expect(state.guesses).toEqual([10, 55, 80]);
			expect(state.feedback).toEqual('You\'re Warm');
			state = reducer(state, makeGuess(95));
			expect(state.guesses).toEqual([10, 55, 80, 95]);
			expect(state.feedback).toEqual('You\'re Hot!');
			state = reducer(state, makeGuess(100));
			expect(state.guesses).toEqual([10, 55, 80, 95, 100]);
			expect(state.feedback).toEqual('You got it!');
		});
	});

	describe('showInfoModal', () => {
		it('should show modal on toggle', () => {
			let state = {
				guesses: [],
				feedback:'',
				showInfoModal: false
			}
			state = reducer(state, toggleInfoModal());
			expect(state.showInfoModal).toEqual(true);
		})
	})
})
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import QNAElement from '@/components/QNAElement';

describe('QNAElement', () => {
	const question = 'What is Next.js?';
	const answer = 'Next.js is a React framework for production.';

	test('renders the question correctly', () => {
		render(<QNAElement question={question} answer={answer} />);
		expect(screen.getByText(`Q:`)).toBeInTheDocument();
		expect(screen.getByText(question)).toBeInTheDocument();
	});

	test('does not show the answer initially', () => {
		render(<QNAElement question={question} answer={answer} />);
		expect(screen.queryByText(answer)).not.toBeInTheDocument();
	});

	test('shows and hides the answer when clicked', () => {
		render(<QNAElement question={question} answer={answer} />);

		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(screen.getByText(answer)).toBeInTheDocument();

		fireEvent.click(button);
		expect(screen.queryByText(answer)).not.toBeInTheDocument();
	});
});

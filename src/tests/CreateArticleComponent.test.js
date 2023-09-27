import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import CreateArticleComponent, { PostArticle } from '../components/CreateArticleComponent'

test('Should render CreateArticleComponent', () => {
    render(<CreateArticleComponent/>);
    const elementCAC = screen.getByTestId('CAC-ArticleNames')
    expect(elementCAC).toBeInTheDocument();
    expect(elementCAC).toHaveTextContent('Article Names')
});

test('Should create article with title from input after pressing make article button', async () => {
    const PostArticleMock = jest.fn();
    render(<CreateArticleComponent PostArticle={PostArticleMock}/>);
    const attribute = 'Apples';
    const inputElement = screen.getByTestId('CAC-MakeArticleNames');
    const buttonElement = screen.getByTestId('CAC-MakeArticleButton');
    
    fireEvent.change(inputElement, { target: { value: attribute } });
    await fireEvent.click(buttonElement);
    
    const articleList = screen.getByTestId('CAC-ArticleList')
    const rows = screen.getAllByRole('row', { container: articleList });

    expect(inputElement).toHaveValue('Apples');
    await(() => {
        expect(PostArticleMock).toHaveBeenCalled();
    });
    await(() => {
        expect(rows[1].title).toContain(attribute);
    });
});
require 'faker'

def get_book
    return {
        title: Faker::Book.title,
        author: Faker::Book.author,
        genre: Faker::Book.genre
    }
end

def get_books(amount)
    books = []
    amount.times do
        books.append get_book
    end
    return { books: books }
end
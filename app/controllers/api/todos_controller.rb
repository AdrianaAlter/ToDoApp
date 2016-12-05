class Api::TodosController < ApplicationController

  def index
    @todos = Todo.all
    render :index
  end

  def create
    @todo = Todo.new(title: params[:title])
    if @todo.save
      render :show
    end
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    render :show
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    @todos = Todo.all
    render :index
  end

  private

  def todo_params
    params.require(:todo).permit(:title, :description, :done, :urgent)
  end

end

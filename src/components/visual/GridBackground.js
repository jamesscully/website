import './GridBackground.css'

import React from "react";

class Cell {
    constructor(x, y, enabled) {
        this.x = x;
        this.y = y;

        this.enabled = enabled;
    }
}

class CellView extends React.Component {
    render() {
        const {x, y} = this.props

        const cellSize = 40;
        const padding = 4

        return(
            <div
                className={"cell"}
                style={{
                    left: `${cellSize * x + padding}px`,
                    top: `${cellSize * y + padding}px`,
                    width: `${cellSize - padding}px`,
                    height: `${cellSize - padding}px`
                }}
            />
        )
    }
}

export default class GridBackground extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: props.rows,
            cols: props.cols,
            running: false,
            interval: 100
        }

        this.board = this.getEmptyBoard()
    }

    getEmptyBoard() {
        let board = [];

        const {rows, cols} = this.state

        for(let y = 0; y < rows; y++) {
            board[y] = [];
            for(let x = 0; x < cols; x++) {
                board[y][x] = new Cell(x, y, true)
            }
        }

        return board
    }

    render() {
        // console.log(this.board)
        return (
            <div id={"board"}>
                {
                    this.board.map(row => {
                        return row.map(cell => {
                            console.log("Cell: ")
                            console.log(cell)
                            return <CellView x={cell.x} y={cell.y}/>
                        })
                    })
                }
            </div>
        );
    }
}

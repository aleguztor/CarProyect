package com.solera.methods;

import java.util.Arrays;

public class ModifiedMaze {
	
	public int[][] modified(){
		Maze maze = new Maze(2, 4);
		String m = maze.toString();
		System.out.println(m);
		char[][] m2 = maze.getGrid();
		int[][] fullGrid = new int[12][10];
		for (int i = 0; i < fullGrid.length; i++) {
			for (int j = 0; j < fullGrid[0].length; j++) {
				fullGrid[i][j] = (int) (Math.random()*3);
			}
		}
		
		System.out.println(Arrays.deepToString(fullGrid));
		for (int x = 0; x < m2.length; x++) {
			for (int y = 0; y < m2[0].length; y++) {
				fullGrid[x][y] = m2[x][y];
		   }
		}
		
		for (int a = 0; a < fullGrid[0].length; a++) {
			for (int b = 0; b < fullGrid[0].length; b++) {
				if (fullGrid[a][b] > 47) {
					fullGrid[a][b] = fullGrid[a][b] - 48;					
				}
			}
		}
	
		return fullGrid;
	}

}

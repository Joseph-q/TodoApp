export interface TaskResponse {
    id: number;
    title: string;
    description?: string | null;
    isCompleted: boolean;
    createdAt?: string | null;  // DateOnly 
    updatedAt?: string | null;  // DateOnly
  }
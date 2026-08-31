export interface AuthLoginResponse {
    success: boolean;
    message: string;
    data: {
        sessionId: string;
        user: {
            id: string;
            email: string;
            name: string;
            avatar: string | null;
        }
    }
}

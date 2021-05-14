interface IAgent {
    id: number;
    name: string;
    os: string;
    status: string;
    type: string;
    ip: string;
    location: string;
    resources: string[];
}

type AgentPayload = {
    agents: IAgent[],
}

type AgentState = {
    agents: IAgent[];
    updatedAt: string;
};

type AgentAction = {
    type: string;
    payload: AgentPayload;
};

type DispatchType = (args: AgentAction) => AgentAction;

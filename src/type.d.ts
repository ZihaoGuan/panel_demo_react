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

type States = {
    agent: AgentState
    cover: CoverState
}

type AgentState = {
    agents: IAgent[];
    updatedAt: string;
};

type AgentAction = {
    type: string;
    payload: AgentPayload;
};

type CoverState = {
    coverOn: Boolean;
}

type CoverAction = {
    type: string;
}

type AgentDispatchType = (args: AgentAction) => AgentAction;
type CoverDispatchType = (args: CoverAction) => CoverAction;
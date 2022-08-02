import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { Greeting } from "../generated/Greeter/Greeter"

export function createGreetingEvent(_greeting: string): Greeting {
  let greetingEvent = changetype<Greeting>(newMockEvent())

  greetingEvent.parameters = new Array()

  greetingEvent.parameters.push(
    new ethereum.EventParam("_greeting", ethereum.Value.fromString(_greeting))
  )

  return greetingEvent
}

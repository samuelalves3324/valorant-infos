export const getAgentsList = async () => {
  const response = await fetch('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true');
  const data = await response.json();
  return data.data;
}

export const getAgentByName = async (name) => {
  const agents = await getAgentsList();
  return agents.find((agent) => agent.displayName === name);
}

export const getWeaponsList = async () => {
  const response = await fetch('https://valorant-api.com/v1/weapons?language=pt-BR');
  const data = await response.json();
  return data.data;
}

export const getWeaponByName = async (name) => {
  const weapons = await getWeaponsList();
  return weapons.find((weapon) => weapon.displayName === name);
}

export const getWeaponSkinsByName = async (name) => {
  const weapon = await getWeaponByName(name);
  return weapon.skins;
}
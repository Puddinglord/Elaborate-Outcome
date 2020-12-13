export class ElaborateCombat {

    forceTargetSelection: Boolean;


    constructor() {
        this.forceTargetSelection = false;
    }

    listenForHooks() {
        console.log('In listen for hooks!');
        Hooks.on('preCreateChatMessage', (data: any) => {
            console.log('Data: ', data);

            if (this.forceTargetSelection) {
            try {
                if (data.content.includes('Attack') || data.flavor.includes('Attack')) {
                // D&D 5e
                } else {
                return true;
                }
            } catch (error) {}
    
            try {
                if (data.flags.pf2e.context.type.includes('attack')) {
                // PF2e
                if (!this.isSelectedAndTargeted()) {
                    return false;
                }
                } else {
                return true;
                }
            } catch (error) {}
            }
        });
    }

    isSelectedAndTargeted(): Boolean {
        return true;
    }
}
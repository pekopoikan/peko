import { makeAutoObservable } from 'mobx';

class FormationStore {
    formations = []
    is = 'is'
    type = 'Tank'
    search = ''
    activeNinja = null

    constructor() {
        makeAutoObservable(this) /* should switch to makeObservable */
    }

    get filteredFormations() {
        const regex = new RegExp(this.search, 'i')

        return this.formations.filter((formation) => 
            (formation.formation_title.match(regex) || formation.formation_creator.match(regex)) 
            && this.is == 'is' ? formation.formation_type == this.type : formation.formation_type != this.type
        )
    }

    setIs = (value) => { this.is = value }

    setType = (value) => { this.type = value }

    setSearch = (value) => { this.search = value }

    setFormations = (value) => { this.formations = value }

    setActiveNinja = (value) => { this.activeNinja = value }
}

const formationStore = new FormationStore()

export default formationStore

/*autorun(() => {
    console.log(formationStore.is)
    console.log(formationStore.type)
    console.log(formationStore.search)
    console.log(formationStore.formations)
    console.log(formationStore.activeNinja)
})*/
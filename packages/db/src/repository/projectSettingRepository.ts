import { ProjectSettingSchemaType } from "../types/projectType/projectSetting.Types.js";
import ProjectSettingsModel from "../model/project/projectSettings.model.js";




export const projectSettingRepository = {

    async create(setting: ProjectSettingSchemaType) {
        return ProjectSettingsModel.create(setting);
    },

    async delete(projectId: string) {
        return ProjectSettingsModel.findOneAndDelete({ projectId });
    },

    async getByProjectId(projectId: string) {
        return ProjectSettingsModel.findOne({ projectId });
    }


}
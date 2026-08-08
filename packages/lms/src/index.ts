import { H5PConfig } from '@lumieducation/h5p-server';
import { Scorm12API, Scorm2004API } from 'scorm-again';

export type ScormSettings = ConstructorParameters<typeof Scorm12API>[0];

export const h5pConfig = new H5PConfig(undefined, {
  baseUrl: '/api/h5p',
  ajaxUrl: '/api/h5p/ajax',
  contentFilesUrl: '/api/h5p/content',
  coreUrl: '/h5p/core',
  editorLibraryUrl: '/h5p/editor',
  librariesUrl: '/api/h5p/libraries',
  platformName: 'Treinamento AtlasGR',
  platformVersion: '1.0.0',
  sendUsageStatistics: false,
});

export function createScorm12Runtime(settings?: ScormSettings): Scorm12API {
  return new Scorm12API(settings);
}

export function createScorm2004Runtime(settings?: ScormSettings): Scorm2004API {
  return new Scorm2004API(settings);
}
